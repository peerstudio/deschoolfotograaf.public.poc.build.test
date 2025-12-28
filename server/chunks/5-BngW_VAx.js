import { r as redirect } from './index-B2LGyy1l.js';
import { g as getDb } from './index4-5m5U_tIY.js';
import { g as getLanguageFromCookies, t as translations } from './index6-DwXL8VEN.js';
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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e6a53a64-03ef-4e39-8327-5cf158c27336", e._sentryDebugIdIdentifier = "sentry-dbid-e6a53a64-03ef-4e39-8327-5cf158c27336");
    })();
  } catch (e) {
  }
}
const load = async ({ params, cookies }) => {
  const orderNumber = params.ordernumber;
  if (!orderNumber) {
    redirect(303, "/");
  }
  try {
    const order = await getDb().order.findFirst({
      where: {
        number: orderNumber
      },
      select: {
        id: true,
        number: true,
        createdOn: true,
        orderState: true,
        subTotal: true,
        freight: true,
        transaction: true,
        vat: true,
        grandTotal: true,
        userId: true,
        deliveryOptionId: true,
        paymentOptionId: true,
        shippingAddressId: true
      }
    });
    if (!order) {
      redirect(303, "/");
    }
    const user = await getDb().user.findUnique({
      where: {
        id: order.userId
      },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        phone: true
      }
    });
    const orderLinesData = await getDb().orderLine.findMany({
      where: {
        orderId: order.id
      },
      select: {
        id: true,
        orderQuantity: true,
        price: true,
        vat: true,
        photoLinkId: true,
        product: {
          select: {
            name: true,
            partNumber: true
          }
        },
        photoLink: {
          select: {
            publicationDate: true,
            userRegistration: {
              select: {
                firstName: true,
                lastName: true
              }
            },
            userRegistrationGroup: {
              select: {
                groupId: true,
                subGroupId: true
              }
            }
          }
        }
      }
    });
    const deliveryOption = await getDb().orderDeliveryOption.findUnique({
      where: {
        id: order.deliveryOptionId
      },
      select: {
        name: true,
        price: true
      }
    });
    const groupIds = [
      ...new Set(
        orderLinesData.map((line) => line.photoLink?.userRegistrationGroup?.groupId).filter((id) => id !== null && id !== void 0)
      )
    ];
    const subGroupIds = [
      ...new Set(
        orderLinesData.map((line) => line.photoLink?.userRegistrationGroup?.subGroupId).filter((id) => id !== null && id !== void 0)
      )
    ];
    const groups = groupIds.length > 0 ? await getDb().userGroup.findMany({
      where: { id: { in: groupIds } },
      select: { id: true, name: true }
    }) : [];
    const subGroups = subGroupIds.length > 0 ? await getDb().userSubGroup.findMany({
      where: { id: { in: subGroupIds } },
      select: { id: true, name: true }
    }) : [];
    const groupMap = new Map(groups.map((g) => [g.id, g.name]));
    const subGroupMap = new Map(subGroups.map((sg) => [sg.id, sg.name]));
    const cultureName = getLanguageFromCookies(cookies);
    const productNames = [...new Set(orderLinesData.map((line) => line.product.name))];
    const localizations = await getDb().localization.findMany({
      where: {
        className: "product",
        cultureName,
        resourceName: {
          in: productNames
        }
      },
      select: {
        resourceName: true,
        resourceValue: true
      }
    });
    const translationMap = new Map(
      localizations.map((loc) => [loc.resourceName, loc.resourceValue])
    );
    const paymentOption = await getDb().orderPaymentOption.findUnique({
      where: {
        id: order.paymentOptionId
      },
      select: {
        name: true,
        code: true,
        price: true
      }
    });
    const shippingAddress = order.shippingAddressId ? await getDb().shippingAddress.findUnique({
      where: {
        id: order.shippingAddressId
      },
      select: {
        address: {
          select: {
            street: true,
            number: true,
            box: true,
            city: true,
            postalCode: true
          }
        }
      }
    }) : null;
    return {
      order: {
        id: order.id,
        number: order.number,
        createdOn: order.createdOn,
        orderState: order.orderState,
        subTotal: parseFloat(order.subTotal.toString()),
        freight: parseFloat(order.freight.toString()),
        transaction: parseFloat(order.transaction.toString()),
        vat: parseFloat(order.vat.toString()),
        grandTotal: parseFloat(order.grandTotal.toString())
      },
      user: user ? {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone
      } : null,
      orderLines: orderLinesData.map((line) => ({
        id: line.id,
        orderQuantity: line.orderQuantity,
        price: parseFloat(line.price.toString()),
        vat: parseFloat(line.vat.toString()),
        productName: translationMap.get(line.product.name) || line.product.name,
        productPartNumber: line.product.partNumber,
        studentName: line.photoLink?.userRegistration ? `${line.photoLink.userRegistration.firstName} ${line.photoLink.userRegistration.lastName}` : void 0,
        schoolName: line.photoLink?.userRegistrationGroup?.groupId ? groupMap.get(line.photoLink.userRegistrationGroup.groupId) : void 0,
        className: line.photoLink?.userRegistrationGroup?.subGroupId ? subGroupMap.get(line.photoLink.userRegistrationGroup.subGroupId) : void 0,
        publicationYear: line.photoLink?.publicationDate ? new Date(line.photoLink.publicationDate).getFullYear() : void 0
      })),
      deliveryOption: deliveryOption ? {
        name: deliveryOption.name,
        price: parseFloat(deliveryOption.price.toString())
      } : null,
      paymentOption: paymentOption ? {
        name: paymentOption.name,
        code: paymentOption.code,
        price: parseFloat(paymentOption.price.toString())
      } : null,
      shippingAddress: shippingAddress?.address ? {
        street: shippingAddress.address.street,
        number: shippingAddress.address.number,
        box: shippingAddress.address.box,
        city: shippingAddress.address.city,
        postalCode: shippingAddress.address.postalCode
      } : null,
      translations: translations[cultureName]
    };
  } catch (err) {
    console.error("Error loading order confirmation:", err);
    redirect(303, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D-p5oNRz.js')).default;
const server_id = "src/routes/order-confirmation/[ordernumber]/+page.server.ts";
const imports = ["_app/immutable/nodes/5.aUu7uA-O.js","_app/immutable/chunks/7_wQ3_Ue.js","_app/immutable/chunks/CyQ2JImZ.js","_app/immutable/chunks/Y1KG8yBY.js","_app/immutable/chunks/DksHhPlh.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-BngW_VAx.js.map
