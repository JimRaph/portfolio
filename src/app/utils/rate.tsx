const rateLimitMap = new Map<string, { count: number; time: number }>();

const WINDOW_SIZE = 3*60 * 1000; 
const MAX_REQUESTS = 2;        

const isRated = (ip: string): boolean=> {

  if(!ip) return false
  const currentTime = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, time: currentTime });
    return false;
  }

  if (currentTime - record.time > WINDOW_SIZE) {
    rateLimitMap.set(ip, { count: 1, time: currentTime });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  rateLimitMap.set(ip, record);
  return false;
}


export default isRated
