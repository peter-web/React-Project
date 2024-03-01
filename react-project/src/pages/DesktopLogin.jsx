import Container from "../components/Container";

const DesktopLogin = () => {
  return (
    <main className="w-full h-[1080px] relative overflow-hidden flex flex-col items-center justify-center lg:flex-row md:w-[960px] md:h-[763px] md:flex-col md:gap-[10px] md:items-center md:justify-start md:pt-0 md:box-border sm:flex sm:w-[420px] sm:h-[763px] sm:flex-col sm:items-center sm:justify-start sm:pt-0 sm:box-border">
      <div className="self-stretch flex-1 flex flex-col items-center justify-center md:self-stretch md:w-auto md:h-auto md:flex-col md:gap-[10px_0px] md:items-center md:justify-start sm:flex-1 sm:items-center sm:justify-center sm:pt-0 sm:box-border">
        <Container />
      </div>
    </main>
  );
};

export default DesktopLogin;
