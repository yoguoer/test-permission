export function getAuthList() {
    const data = {
        "menuNames": ['HelloWorld','badWorld'],
        "rule": ['/HelloWorld','/badWorld']
    };  
    console.log("🚀 ~ getAuthList ~ data:", data)
    return data
}

export async function checkOaLogin() {
    return new Promise((resolve)=> {
        // 假设这是从服务器获取到的数据  
        const data = {
            "token": "U8g4QGC49FdR8btWuJnY3umBcKxj9D3wcI3ByRzevm5m8NwMErft/YpsVthtO0oQxEQWKacLw/O9Ke8D.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMC4xMTguMS44OTo4MDg2IiwiYXVkIjoiIiwiaWF0IjoxNzE0MTMxMDU2LCJuYmYiOjE3MTQxMzEwNTYsImV4cCI6MTcxNDEzNDY1NiwiZGF0YSI6MTQ3fQ.jV1QMEIjF0nvXLzlKpPzJ6sDMj5rceB-qmD2b7wDxm0",
            "expire": 1714134656,
            "oa": []
        };  
        // 使用resolve方法将结果返回给调用者  
        resolve(data);  
    })
}