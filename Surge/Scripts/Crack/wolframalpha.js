var obj = JSON.parse($response.body);
obj= {
 "account": {
    "info": {
      "hasError": false,
      "error": null,
      "name": "VIP",
      "email": "i@qnmlgb.trade"
    },
    "status": {
      "hasError": false,
      "error": null,
      "signedIn": true,
      "pro": true,
      "proForStudents": true,
      "proForEducators": true,
      "proLevel": 3
    },
    "persona": {
      "classification": "Student",
      "source": null,
      "resourceId": {
        "userId": 9782356,
        "productId": 9
      }
    },
    "permissions": {
      "hasError": false,
      "error": null,
      "features": {
        "practiceSheets": {
          "units": null,
          "value": true
        },
        "embeddablePods": {
          "units": null,
          "value": true
        },
        "webApps": {
          "units": null,
          "value": ""
        },
        "fileUpload": {
          "units": "MB",
          "value": 0
        },
        "imageInput": {
          "units": "MB",
          "value": 0
        },
        "showSteps": {
          "units": null,
          "value": true
        },
        "specialCharacterKeyboards": {
          "units": null,
          "value": true
        },
        "pdfDownload": {
          "units": null,
          "value": true
        },
        "copyablePlaintext": {
          "units": null,
          "value": true
        },
        "cdfDownload": {
          "units": null,
          "value": true
        },
        "dataInput": {
          "units": null,
          "value": true
        },
        "cdfInteractivePods": {
          "units": null,
          "value": true
        },
        "customizeGraphicsPods": {
          "units": null,
          "value": true
        },
        "storeDownloadedData": {
          "units": null,
          "value": true
        },
        "longerTimeouts": {
          "units": "seconds",
          "value": 0
        },
        "zoomSubpods": {
          "units": null,
          "value": true
        },
        "downloadPodData": {
          "units": null,
          "value": true
        },
        "removeAds": {
          "units": null,
          "value": true
        },
        "emailProductSupport": {
          "units": null,
          "value": true
        },
        "saveSubpodAsImage": {
          "units": null,
          "value": true
        }
      }
    },
    "subscriptions": {
      "hasError": false,
      "error": null,
      "hasSubscriptions": true,
      "primarySubscription": {
        "subscriptionId": 4486323,
        "userId": 9782356,
        "planId": 1106,
        "startDate": "2020-08-04",
        "nextBillingDate": "2099-12-31",
        "finalAccessDate": "2099-12-31",
        "status": "ACTIVE",
        "paymentType": "NONE",
        "monthStart": "2020-08-04",
        "monthEnd": "2099-12-31",
        "nda": false,
        "userUuid": "ce6341b4-5c9c-45b9-7584-7542ff503b1c",
        "plan": {
          "planId": 1109,
          "name": "Professional",
          "description": "Wolfram Alpha Professional Subscription",
          "billingPeriod": "NONE",
          "planType": "PRO",
          "productId": 12,
          "canUpgrade": false,
          "product": {
            "productId": 12,
            "name": "Wolfram|Alpha",
            "type": "SUBSCRIPTION",
            "prettyName": "wa",
            "productReady": false,
            "contactUsUrl": "https://www.wolframalpha.com/contact.html",
            "productUrl": "https://www.wolframalpha.com/",
            "productHost": "www.wolframalpha.com",
            "productPricingUrl": "https://www.wolframalpha.com/pro",
            "productReleased": false,
            "learnAboutUrl": "https://products.wolframalpha.com/"
          }
        }
      },
      "nextSubscription": null,
      "nextPaidSubscription": null,
      "allSubscriptions": [
        {
         "subscriptionId": 4486323,
        "userId": 9782356,
        "planId": 1106,
        "startDate": "2020-08-04",
        "nextBillingDate": "2099-12-31",
        "finalAccessDate": "2099-12-31",
        "status": "ACTIVE",
        "paymentType": "NONE",
        "monthStart": "2020-08-04",
        "monthEnd": "2099-12-31",
        "nda": false,
        "userUuid": "ce6341b4-5c9c-45b9-7584-7542ff503b1c",
        "plan": {
          "planId": 1109,
          "name": "Pro",
          "description": "Wolfram Alpha Professional Subscription",
          "billingPeriod": "NONE",
          "planType": "PRO",
          "productId": 12,
          "canUpgrade": false,
          "product": {
            "productId": 12,
            "name": "Wolfram|Alpha",
            "type": "SUBSCRIPTION",
            "prettyName": "wa",
            "productReady": false,
            "contactUsUrl": "https://www.wolframalpha.com/contact.html",
            "productUrl": "https://www.wolframalpha.com/",
            "productHost": "www.wolframalpha.com",
            "productPricingUrl": "https://www.wolframalpha.com/pro",
            "productReleased": false,
            "learnAboutUrl": "https://products.wolframalpha.com/"
            }
          }
        }
      ],
      "billingDetails": null
    },
    "preferences": {
      "hasError": false,
      "error": null,
      "id": 8058195,
      "userId": 9782356,
      "createdDate": 1596536830000,
      "updatedDate": 1596536830000,
      "updatedBy": 0,
      "location": "Automatic",
      "country": "Automatic",
      "timezone": "Automatic",
      "currency": "Automatic",
      "dateFormat": "Automatic",
      "unitFormat": 0,
      "queryHistory": false,
      "querySuggestion": false,
      "keyboard": 0,
      "dataFormat": "Excel 97-2004",
      "imageFormat2d": "gif",
      "imageFormat3d": "format 1",
      "soundFormat": "mp3",
      "resultsWidth": 4,
      "fontSize": 0,
      "contrast": 0,
      "homepageBackground": "blue-circles",
      "homepageHints": 0,
      "homepageHistory": false,
      "homepageFavorites": false,
      "homepageData": false,
      "homepageShortcuts": false
    },
    "links": {
      "facebook": null
    },
    "hasError": false,
    "error": null,
    "profilingSet": null
  },
  "hasError": false,
  "error": null,
  "profilingSet": null
};
$done({body: JSON.stringify(obj)});