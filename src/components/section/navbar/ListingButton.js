import { Link } from "react-router-dom";

const ListingButton = () => {
  return (
    <Link
      to={"/list-token"}
      onClick={() => localStorage.removeItem("list-token")}
    >
      <button className="bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] py-2 px-5 flex gap-1 justify-center items-center rounded-full text-white font-medium">
        <img src="/img/list-token.png" alt="" className="h-6" />
        Listing
      </button>
    </Link>
  );
};

export default ListingButton;
