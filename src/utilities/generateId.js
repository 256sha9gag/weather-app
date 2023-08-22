const  generateId = () => {
  return Math.random().toString(36).slice(0, 9);
}

export default generateId;
