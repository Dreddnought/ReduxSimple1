export function selectBook(book) {
  // Select book is an ActionCreator.  It needs to return an Action:
  // an object with a 'type' property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
