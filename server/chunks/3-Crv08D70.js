import { r as redirect } from './index-B2LGyy1l.js';
import { g as getDb } from './index4-5m5U_tIY.js';
import { O as OrderState } from './order-state-BOB8p82w.js';
import { g as getLanguageFromCookies } from './index6-DwXL8VEN.js';
import 'node:path';
import 'node:url';
import '@prisma/client/runtime/client';
import './_commonjsHelpers-Bi63GUIs.js';
import 'node:module';
import 'tty';
import 'util';
import 'os';
import 'events';
import 'timers';
import 'stream';
import 'crypto';
import 'tls';
import 'net';
import 'dns';
import 'constants';
import 'http';
import 'https';
import 'buffer';
import 'fs';
import 'path';
import 'assert';
import 'url';
import 'child_process';
import 'dgram';
import 'string_decoder';
import './shared-server-Bskssk4F.js';

!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e.SENTRY_RELEASE = { id: "8a555e7f1a2aff28713c57fe6955c74723dfdd47" };
  } catch (e2) {
  }
})();
{
  try {
    (function() {
      var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "de9dea01-7bae-4cf3-a027-b689a460d7b8", e._sentryDebugIdIdentifier = "sentry-dbid-de9dea01-7bae-4cf3-a027-b689a460d7b8");
    })();
  } catch (e) {
  }
}
const load = async ({ cookies, url }) => {
  const studentCode = cookies.get("studentCode");
  if (!studentCode) {
    redirect(303, "/");
  }
  const cancelledOrderNumber = url.searchParams.get("payment_cancelled");
  if (cancelledOrderNumber) {
    try {
      const order = await getDb().order.findFirst({
        where: { number: cancelledOrderNumber }
      });
      if (order && order.orderState !== OrderState.Cancelled) {
        await getDb().order.update({
          where: { id: order.id },
          data: { orderState: OrderState.Cancelled }
        });
        console.log(`Order ${cancelledOrderNumber} marked as cancelled`);
      }
    } catch (error) {
      console.error("Error updating cancelled order:", error);
    }
  }
  const selectedYearParam = url.searchParams.get("year");
  const selectedYear = selectedYearParam ? parseInt(selectedYearParam) : null;
  try {
    const student = await getDb().userRegistration.findFirst({
      where: {
        code: studentCode
      }
    });
    if (!student) {
      cookies.delete("studentCode", { path: "/" });
      redirect(303, "/");
    }
    let siblings = [];
    if (student.siblingHash) {
      siblings = await getDb().userRegistration.findMany({
        where: {
          siblingHash: student.siblingHash,
          id: {
            not: student.id
          },
          deactivatedOn: null
        },
        select: {
          id: true,
          firstName: true,
          lastName: true
        },
        orderBy: {
          firstName: "asc"
        }
      });
    }
    const regGroups = await getDb().userRegistrationGroup.findMany({
      where: {
        userRegistrationId: student.id
      },
      select: {
        groupId: true,
        subGroupId: true,
        id: true
      }
    });
    if (regGroups.length === 0) {
      return {
        student,
        photos: [],
        availableYears: [],
        selectedYear: null,
        siblings
      };
    }
    const allPhotoLinksForYears = await getDb().photoLink.findMany({
      where: {
        userRegistrationId: student.id,
        deactivedOn: null,
        publicationDate: {
          not: null
        },
        product: {
          deactivatedOn: null
        }
      },
      select: {
        publicationDate: true
      }
    });
    const years = [
      ...new Set(
        allPhotoLinksForYears.map((pl) => pl.publicationDate?.getFullYear()).filter((year) => year !== null && year !== void 0)
      )
    ].sort((a, b) => b - a);
    const yearToDisplay = selectedYear && years.includes(selectedYear) ? selectedYear : years[0];
    if (!yearToDisplay) {
      return {
        student,
        photos: [],
        products: [],
        availableYears: [],
        selectedYear: null,
        siblings
      };
    }
    const photoLinksData = await getDb().photoLink.findMany({
      where: {
        userRegistrationId: student.id,
        deactivedOn: null,
        publicationDate: {
          gte: /* @__PURE__ */ new Date(`${yearToDisplay}-01-01`),
          lt: /* @__PURE__ */ new Date(`${yearToDisplay + 1}-01-01`)
        },
        product: {
          deactivatedOn: null
        }
      },
      select: {
        id: true,
        productId: true,
        photoId: true,
        publicationDate: true,
        userRegistrationGroupId: true,
        product: {
          select: {
            name: true,
            rank: true,
            isRecommended: true,
            partNumber: true
          }
        },
        userRegistrationGroup: {
          select: {
            groupId: true,
            subGroupId: true
          }
        }
      }
    });
    const uniquePhotoIds = [
      ...new Set(photoLinksData.map((pl) => pl.photoId).filter((id) => id !== null))
    ];
    const allPhotos = uniquePhotoIds.length > 0 ? await getDb().photo.findMany({
      where: {
        id: {
          in: uniquePhotoIds
        },
        preview: true
      },
      select: {
        id: true,
        fileName: true,
        name: true
      }
    }) : [];
    const uniqueGroupIds = [
      ...new Set(
        photoLinksData.map((pl) => pl.userRegistrationGroup?.groupId).filter((id) => id !== null && id !== void 0)
      )
    ];
    const uniqueSubGroupIds = [
      ...new Set(
        photoLinksData.map((pl) => pl.userRegistrationGroup?.subGroupId).filter((id) => id !== null && id !== void 0)
      )
    ];
    const groups = uniqueGroupIds.length > 0 ? await getDb().userGroup.findMany({
      where: {
        id: {
          in: uniqueGroupIds
        }
      },
      select: {
        id: true,
        code: true,
        name: true
      }
    }) : [];
    const subGroups = uniqueSubGroupIds.length > 0 ? await getDb().userSubGroup.findMany({
      where: {
        id: {
          in: uniqueSubGroupIds
        }
      },
      select: {
        id: true,
        code: true,
        name: true
      }
    }) : [];
    const groupMap = new Map(groups.map((g) => [g.id, g.name]));
    const subGroupMap = new Map(subGroups.map((sg) => [sg.id, sg.name]));
    const groupCodeMap = new Map(groups.map((g) => [g.id, g.code]));
    const subGroupCodeMap = new Map(subGroups.map((sg) => [sg.id, sg.code]));
    const cultureName = getLanguageFromCookies(cookies);
    const localizations = await getDb().localization.findMany({
      where: {
        OR: [{ className: "product" }, { className: "photo" }],
        cultureName
      },
      select: {
        resourceName: true,
        resourceValue: true
      }
    });
    const translationMap = new Map(
      localizations.map((loc) => [loc.resourceName, loc.resourceValue])
    );
    const photoWithPaths = allPhotos.map((photo) => {
      const photoLink = photoLinksData.find((pl) => pl.photoId === photo.id);
      if (!photoLink)
        return {
          id: photo.id,
          fileName: photo.fileName,
          name: photo.name,
          path: `https://shop.deschoolfotograaf.be/Uploads/${photo.fileName}`,
          rank: null
        };
      const groupCode = photoLink.userRegistrationGroup?.groupId ? groupCodeMap.get(photoLink.userRegistrationGroup.groupId) : null;
      const subGroupCode = photoLink.userRegistrationGroup?.subGroupId ? subGroupCodeMap.get(photoLink.userRegistrationGroup.subGroupId) : null;
      const pubDate = photoLink.publicationDate ? new Date(photoLink.publicationDate).toISOString().split("T")[0] : null;
      if (groupCode && subGroupCode && pubDate) {
        return {
          id: photo.id,
          fileName: photo.fileName,
          name: photo.name,
          path: `https://shop.deschoolfotograaf.be/Uploads/${groupCode}/${subGroupCode}/${pubDate}/${photo.fileName}`,
          rank: photoLink.product.rank
        };
      }
      return {
        id: photo.id,
        fileName: photo.fileName,
        name: photo.name,
        path: `https://shop.deschoolfotograaf.be/Uploads/${photo.fileName}`,
        rank: photoLink.product.rank
      };
    });
    const seenFileNames = /* @__PURE__ */ new Set();
    const studentPhotos = photoWithPaths.filter((photo) => {
      if (seenFileNames.has(photo.fileName)) {
        return false;
      }
      seenFileNames.add(photo.fileName);
      return true;
    }).sort((a, b) => {
      if (a.rank === null) return 1;
      if (b.rank === null) return -1;
      return b.rank - a.rank;
    }).map((photo) => ({
      ...photo,
      name: translationMap.get(photo.name) || photo.name
    }));
    const groupIds = regGroups.map((g) => g.groupId);
    const prices = await getDb().productPrice.findMany({
      select: {
        productId: true,
        price: true,
        discountPercentage: true,
        userGroupId: true
      }
    });
    const productIconsData = await getDb().productProductIcon.findMany({
      where: {
        deactivatedOn: null
      },
      select: {
        productId: true,
        groupId: true,
        productIcon: {
          select: {
            icon: true
          }
        }
      }
    });
    const photosWithPrices = photoLinksData.map((photo) => {
      const productPrice = prices.find(
        (p) => p.productId === photo.productId && groupIds.includes(p.userGroupId)
      );
      const basePrice = productPrice?.price ? parseFloat(productPrice.price.toString()) : 0;
      const discount = productPrice?.discountPercentage ? parseFloat(productPrice.discountPercentage.toString()) : 0;
      const finalPrice = basePrice * (1 - discount / 100);
      const productIconMatches = productIconsData.filter((pi) => pi.productId === photo.productId);
      const groupMatchingIcons = productIconMatches.filter(
        (pi) => pi.groupId && groupIds.includes(pi.groupId)
      );
      const nullGroupIcons = productIconMatches.filter((pi) => !pi.groupId);
      const selectedIcons = groupMatchingIcons.length > 0 ? groupMatchingIcons : nullGroupIcons;
      const iconUrls = selectedIcons.map((pi) => pi.productIcon?.icon.replace(/^~\/Images\/Icons\//, "/icons/")).filter((url2) => url2 !== void 0).filter((url2, index, self2) => self2.indexOf(url2) === index);
      const translatedName = translationMap.get(photo.product.name) || photo.product.name;
      const schoolName = photo.userRegistrationGroup?.groupId ? groupMap.get(photo.userRegistrationGroup.groupId) : void 0;
      const className = photo.userRegistrationGroup?.subGroupId ? subGroupMap.get(photo.userRegistrationGroup.subGroupId) : void 0;
      const publicationYear = photo.publicationDate ? new Date(photo.publicationDate).getFullYear() : void 0;
      return {
        photoLinkId: photo.id,
        productId: photo.productId,
        productName: translatedName,
        photoId: photo.photoId,
        publicationDate: photo.publicationDate,
        userRegistrationGroupId: photo.userRegistrationGroupId,
        rank: photo.product.rank,
        isRecommended: photo.product.isRecommended,
        groupId: photo.userRegistrationGroup?.groupId,
        subGroupId: photo.userRegistrationGroup?.subGroupId,
        partNumber: photo.product.partNumber,
        price: finalPrice,
        originalPrice: basePrice,
        discount,
        iconUrls,
        studentName: `${student.firstName} ${student.lastName}`,
        schoolName,
        className,
        publicationYear
      };
    });
    const sortedPhotos = photosWithPrices.sort((a, b) => {
      if (a.rank === null) return 1;
      if (b.rank === null) return -1;
      return b.rank - a.rank;
    });
    const fileNameToPhotoIds = /* @__PURE__ */ new Map();
    allPhotos.forEach((photo) => {
      const existing = fileNameToPhotoIds.get(photo.fileName) || [];
      existing.push(photo.id);
      fileNameToPhotoIds.set(photo.fileName, existing);
    });
    const productsWithRelatedPhotoIds = sortedPhotos.map((product) => {
      if (!product.photoId) {
        return {
          ...product,
          relatedPhotoIds: null
          // null means "available for all photos"
        };
      }
      const photo = allPhotos.find((p) => p.id === product.photoId);
      if (!photo) {
        return {
          ...product,
          relatedPhotoIds: null
          // null means "available for all photos"
        };
      }
      const relatedIds = fileNameToPhotoIds.get(photo.fileName) || [product.photoId];
      return {
        ...product,
        relatedPhotoIds: relatedIds
      };
    });
    return {
      student,
      photos: studentPhotos,
      products: productsWithRelatedPhotoIds,
      availableYears: years,
      selectedYear: yearToDisplay,
      siblings
    };
  } catch (err) {
    if (err instanceof Response) {
      throw err;
    }
    console.error("Error loading catalogue:", err);
    cookies.delete("studentCode", { path: "/" });
    redirect(303, "/");
  }
};
const actions = {
  switchStudent: async ({ request, cookies }) => {
    const data = await request.formData();
    const newStudentId = data.get("studentId")?.toString();
    if (!newStudentId) {
      return { success: false };
    }
    const student = await getDb().userRegistration.findFirst({
      where: {
        id: parseInt(newStudentId),
        deactivatedOn: null
      }
    });
    if (!student) {
      return { success: false };
    }
    const currentStudentCode = cookies.get("studentCode");
    if (currentStudentCode) {
      const currentStudent = await getDb().userRegistration.findFirst({
        where: {
          code: currentStudentCode
        },
        select: {
          siblingHash: true
        }
      });
      if (!currentStudent?.siblingHash || !student.siblingHash || currentStudent.siblingHash !== student.siblingHash) {
        return { success: false };
      }
    }
    cookies.set("studentCode", student.code, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30
      // 30 days
    });
    return { success: true };
  },
  addStudentByCode: async ({ request, cookies }) => {
    const data = await request.formData();
    const code = data.get("code")?.toString() || "";
    const sanitizedCode = code.replace(/\D/g, "");
    if (sanitizedCode.length !== 10) {
      return { success: false, error: "invalidCode" };
    }
    try {
      const student = await getDb().userRegistration.findFirst({
        where: {
          code: sanitizedCode,
          deactivatedOn: null
        },
        select: {
          id: true
        }
      });
      if (!student) {
        return { success: false, error: "invalidCode" };
      }
      cookies.set("studentCode", sanitizedCode, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 365
        // 1 year
      });
      throw redirect(303, "/catalogue");
    } catch (err) {
      console.error("Error finding student:", err);
      return { success: false, error: "serverError" };
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DvS1kpCi.js')).default;
const server_id = "src/routes/catalogue/+page.server.ts";
const imports = ["_app/immutable/nodes/3.CsgB7kdD.js","_app/immutable/chunks/7_wQ3_Ue.js","_app/immutable/chunks/CyQ2JImZ.js","_app/immutable/chunks/Y1KG8yBY.js","_app/immutable/chunks/DksHhPlh.js","_app/immutable/chunks/DSqw3YzZ.js","_app/immutable/chunks/Bi5D_UGR.js","_app/immutable/chunks/JiB20DbD.js","_app/immutable/chunks/BDCZTAvJ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-Crv08D70.js.map
