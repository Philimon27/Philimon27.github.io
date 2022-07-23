  const{promisify}=require('util')
  const dns= require('dns')
  const dnsResolveAsync= promisify(dns.resolve4)

   async function test(){
    try {
        const res=  await dnsResolveAsync("www.miu.edu")
        console.log(res);
    } catch (error) {
        console.log("ERROR:" + error);
    }
   }
   test()