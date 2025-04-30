export function generateOrderId(): string {
    return Math.floor(100 + Math.random() * 900).toString()
  }