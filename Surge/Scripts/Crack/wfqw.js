var obj = JSON.parse($response.body);

obj = {
    "error": 0,
    "data": {
        "user_info": {
            "reg_time": "1648674165",
            "expired_time": 0,
            "member_state": 0,
            "is_vip": "9A0684792021D73BE42B71491469ADFA"
        },
        "error_code": "",
        "data_info": [

        ],
        "is_success": true,
        "error_msg": ""
    }
};
$done({ body: JSON.stringify(obj) });
