var head = $request.headers;
var ua = head['User-Agent'];
var objc = JSON.parse($response.body);

// 1Blocker
if (ua.indexOf('1Blocker') != -1) {
    objc = {
        "request_date": "2022-08-15T18:21:00Z",
        "request_date_ms": 1660587660199,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "purchase_date": "2020-02-11T07:52:54Z",
                    "product_identifier": "blocker.ios.subscription.yearly",
                    "original_purchase_date": "2020-02-11T07:52:55Z",
                    "expires_date": "2030-02-18T07:52:54Z"
                }
            },
            "first_seen": "2022-07-12T16:16:18Z",
            "last_seen": "2022-08-15T18:16:14Z",
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "334B1075-5E81-4693-91B2-B223E2D27FD3",
            "original_application_version": "1120",
            "original_purchase_date": "2022-07-12T16:15:57Z",
            "other_purchases": {},
            "subscriptions": {
                "blocker.ios.subscription.yearly": {
                    "expires_date": "2030-02-18T07:52:54Z",
                    "original_purchase_date": "2020-02-11T07:52:55Z",
                    "purchase_date": "2020-02-11T07:52:54Z"
                }
            }
        }
    }
}

// Fileball
if (ua.indexOf('Fileball') != -1) {
    objc = {
        "request_date": "2022-04-12T14:44:57Z",
        "request_date_ms": 1649774697910,
        "subscriber": {
            "entitlements": {
                "filebox_pro": {
                    "expires_date": "2999-02-11T09:48:56Z",
                    "grace_period_expires_date": "2999-02-11T09:48:56Z",
                    "product_identifier": "filebox_pro",
                    "purchase_date": "2022-02-11T09:48:56Z"
                }
            },
            "first_seen": "2022-02-11T09:49:26Z",
            "last_seen": "2022-04-12T14:44:57Z",
            "management_url": null,
            "non_subscriptions": {
                "filebox_pro": [
                    {
                        "id": "12ajd865",
                        "is_sandbox": false,
                        "original_purchase_date": "2022-02-11T09:48:56Z",
                        "purchase_date": "2022-02-11T09:48:56Z",
                        "store": "app_store"
                    }
                ]
            },
            "original_app_user_id": "$RCAnonymousID:dccd8008a4a4467d8f7a977d74a25a1b",
            "original_application_version": "102",
            "original_purchase_date": "2022-02-11T09:48:52Z",
            "other_purchases": {
                "filebox_pro": {
                    "purchase_date": "2022-02-11T09:48:56Z"
                }
            },
            "subscriptions": {}
        }
    }
}

$done({ body: JSON.stringify(objc) });