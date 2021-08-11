export const detectMobile = (userAgent: string) =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

export const delay = (timeout: number) => new Promise((done) => setTimeout(done, timeout));
