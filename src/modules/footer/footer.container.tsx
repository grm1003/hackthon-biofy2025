export const FooterContainer = () => {
  return (
<footer className="w-full bg-black text-white h-12 flex items-center justify-center mt-8">
  <p className="text-sm">
    © {new Date().getFullYear()} Assurance.IA. Todos os direitos reservados.
  </p>
</footer>
  );
};