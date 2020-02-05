/**
 * Enum for placeholder message.
 * @readonly
 * @enum {string}
 */
export const PLACEHOLDER = Object.freeze({
  default: "Enter your message",
  count: "다음 채팅까지 0초 남았습니다.",
  restrict: "글쓰기가 제한 되었습니다."
});

/**
 * Enum for message block.
 * @readonly
 * @enum {number}
 */
export const BLOCK = Object.freeze({
  count: 5,
  delay: 5 // unit sec
});