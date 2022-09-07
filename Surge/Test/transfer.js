let isQuantumultX = $task != undefined;

 let isSurge = $httpClient != undefined;
 let isLoon = isSurge && typeof $loon != undefined;
 var $task = isQuantumultX ? $task : {};
 var $httpClient = isSurge ? $httpClient : {};
 var $prefs = isQuantumultX ? $prefs : {};
 var $persistentStore = isSurge ? $persistentStore : {};
 var $notify = isQuantumultX ? $notify : {};
 var $notification = isSurge ? $notification : {};
 
 if (isQuantumultX) {
    var errorInfo = { error: "", };
 $httpClient = {
        get: (url, cb) => {
            var urlObj;
 if (typeof url == "string") { urlObj = { url: url, } } else { urlObj = url }
            $task.fetch(urlObj).then((response) => { cb(undefined, response, response.body) }, (reason) => { errorInfo.error = reason.error;
 cb(errorInfo, response, "") })
        }, post: (url, cb) => {
            var urlObj;
 if (typeof url == "string") { urlObj = { url: url, } } else { urlObj = url }
            url.method = "POST";
 $task.fetch(urlObj).then((response) => { cb(undefined, response, response.body) }, (reason) => { errorInfo.error = reason.error;
 cb(errorInfo, response, "") })
        },
    }
}
if (isSurge) { $task = { fetch: (url) => { return new Promise((resolve, reject) => { if (url.method == "POST") { $httpClient.post(url, (error, response, data) => { if (response) { response.body = data;
 resolve(response, { error: error, }) } else { resolve(null, { error: error, }) } }) } else { $httpClient.get(url, (error, response, data) => { if (response) { response.body = data;
 resolve(response, { error: error, }) } else { resolve(null, { error: error, }) } }) } }) }, } }
if (isQuantumultX) { $persistentStore = { read: (key) => { return $prefs.valueForKey(key) }, write: (val, key) => { return $prefs.setValueForKey(val, key) }, } }
if (isSurge) { $prefs = { valueForKey: (key) => { return $persistentStore.read(key) }, setValueForKey: (val, key) => { return $persistentStore.write(val, key) }, } }
if (isQuantumultX) { $notify = ((notify) => { return function (title, subTitle, detail, url = undefined) { detail = url === undefined ? detail : `${detail}\n点击链接跳转: ${url}`;
 notify(title, subTitle, detail) } })($notify);
 $notification = { post: (title, subTitle, detail, url = undefined) => { detail = url === undefined ? detail : `${detail}\n点击链接跳转: ${url}`;
 $notify(title, subTitle, detail) }, } }
if (isSurge && !isLoon) { $notification.post = ((notify) => { return function (title, subTitle, detail, url = undefined) { detail = url === undefined ? detail : `${detail}\n点击链接跳转: ${url}`;
 notify.call($notification, title, subTitle, detail) } })($notification.post);
 $notify = (title, subTitle, detail, url = undefined) => { detail = url === undefined ? detail : `${detail}\n点击链接跳转: ${url}`;
 $notification.post(title, subTitle, detail) } }
if (isLoon) { $notify = (title, subTitle, detail, url = undefined) => { $notification.post(title, subTitle, detail, url) } }