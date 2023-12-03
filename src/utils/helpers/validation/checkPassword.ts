export const checkPassword = (value?: string) => {
  if (!value) {
    return 0;
  }
  let res = 0;
  /[A-Z]/.test(value) && res++;
  /[a-z]/.test(value) && res++;
  /[$&+,:;=?@#|'<>.^*()%!-]/.test(value) && res++;
  /[0-9]/.test(value) && res++;
  return res;
};
