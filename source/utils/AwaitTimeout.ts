export async function awaitTimeout(delay: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, delay));
}
