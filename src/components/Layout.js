import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-7xl min-h-screen mx-auto py-4 px-6 sm:px-6 lg:px-8">
        <Nav />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
