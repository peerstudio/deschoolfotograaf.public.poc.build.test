import { j as json } from './index-B2LGyy1l.js';

!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e.SENTRY_RELEASE = { id: "99069e462683fde0ac533c0f9d57bdbde12d31be" };
  } catch (e2) {
  }
})();
{
  try {
    (function() {
      var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "608932f8-539d-4589-84c0-674a0a690fcb", e._sentryDebugIdIdentifier = "sentry-dbid-608932f8-539d-4589-84c0-674a0a690fcb");
    })();
  } catch (e) {
  }
}
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { street, houseNumber, postalCode, city, box } = body;
    const BPOST_API_URL = "https://api.mailops.bpost.cloud/roa-info/externalMailingAddressProofingRest/validateAddresses";
    const validationRequest = {
      ValidateAddressesRequest: {
        AddressToValidate: [
          {
            "@id": "1",
            PostalAddress: {
              DeliveryPointLocation: {
                StructuredDeliveryPointLocation: {
                  StreetName: street,
                  StreetNumber: houseNumber,
                  BoxNumber: box || void 0,
                  PostalCode: postalCode,
                  MunicipalityName: city
                }
              }
            }
          }
        ]
      }
    };
    const response = await fetch(BPOST_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "xxxyour_api_key_herexxx"
      },
      body: JSON.stringify(validationRequest)
    });
    if (!response.ok) {
      console.error("Bpost API error:", response.statusText);
      return json({
        valid: false,
        message: "Address validation service temporarily unavailable"
      });
    }
    const data = await response.json();
    const validatedAddresses = data?.ValidateAddressesResponse?.ValidatedAddress;
    if (!validatedAddresses || validatedAddresses.length === 0) {
      return json({
        valid: false,
        message: "Could not validate address"
      });
    }
    const validatedAddress = validatedAddresses[0];
    const error = validatedAddress?.Error;
    if (error) {
      const suggestions = [];
      if (validatedAddress.ValidatedPostalAddress) {
        const suggested = validatedAddress.ValidatedPostalAddress;
        const deliveryPoint = suggested.DeliveryPointLocation?.StructuredDeliveryPointLocation;
        if (deliveryPoint) {
          suggestions.push({
            streetName: deliveryPoint.StreetName || street,
            postalCode: deliveryPoint.PostalCode || postalCode,
            municipalityName: deliveryPoint.MunicipalityName || city,
            houseNumber: deliveryPoint.StreetNumber || houseNumber,
            boxNumber: deliveryPoint.BoxNumber
          });
        }
      }
      return json({
        valid: false,
        suggestions: suggestions.length > 0 ? suggestions : void 0,
        message: error.ErrorDescription || "Address could not be validated"
      });
    }
    return json({
      valid: true,
      message: "Address validated successfully"
    });
  } catch (error) {
    console.error("Address validation error:", error);
    return json(
      {
        valid: false,
        message: "Address validation failed"
      },
      { status: 500 }
    );
  }
};

export { POST };
//# sourceMappingURL=_server.ts-EL1q919e.js.map
