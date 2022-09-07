const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const list = {
    'VSCO': { name: 'membership', id: 'com.circles.fin.premium.yearly' },
    'Filebox': { name: 'filebox_pro', id: 'com.premium.yearly' },
    'Fileball': { name: 'filebox_pro', id: 'com.premium.yearly' },
    '1Blocker': { name: 'premium', id: 'blocker.ios.subscription.yearly' },
    'Pillow': { name: 'premium', id: 'com.neybox.pillow.premium.year' },
    'totowallet': { name: 'all', id: 'com.ziheng.totowallet.onetimepurchase' },
    'Grow': { name: 'grow.pro', id: 'grow_1y_128' },
    '%E6%98%9F%E5%BA%A7': { name: 'pro', id: 'com.rk.horoscope.month12.full' },
    'WidgetsApp': { name: 'pro', id: 'com.rk.horoscope.month12.full' },
    'Pro': { name: 'pro', id: 'revenuecat.pro.yearly' }
};

const data = {
    "expires_date": "2099-09-09T07:52:54Z",
    "original_purchase_date": "2022-09-09T07:52:55Z",
    "product_identifier": "revenuecat.pro.yearly",
    "purchase_date": "2022-09-09T07:52:54Z",
    "store": "app_store",
    "is_sandbox": false,
    "period_type": "trial",
    "billing_issues_detected_at": null,
    "unsubscribe_detected_at": null,
    "grace_period_expires_date":null
};

if (typeof $response == "undefined") {
    delete $request.headers["x-revenuecat-etag"]; // prevent 304 issues
    delete $request.headers["X-RevenueCat-ETag"];
    resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlement = obj.subscriber.entitlement || {};
    for (const i in list) {
        if (new RegExp(`^${i}`, `i`).test(ua)) {
            obj.subscriber.subscriptions[list[i].id] = data;
            obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
            obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
            break;
        }
    }
    resp.body = JSON.stringify(obj);
}

$done(resp);