class SystemHelper {
  public static detectMobile(userAgent: string) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  }

  public static delay(timeout: number) {
    return new Promise((done) => setTimeout(done, timeout));
  }
}

export default SystemHelper;
