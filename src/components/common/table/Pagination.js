import React from "react";
import { usePagination, DOTS } from "./usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  const Button = ({
    children,
    text,
    onClickFunction,
    selected = false,
    disabled = false,
  }) => {
    return (
      <button
        className={`${
          (currentPage !== 1 || currentPage !== lastPage) && selected
            ? "bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9]"
            : "bg-[#21232C]"
        } h-10 cursor-pointer w-10 flex justify-center items-center rounded-full `}
        onClick={onClickFunction}
        disabled={disabled}
      >
        <p className="text-white">{text}</p>
        {children}
      </button>
    );
  };

  return (
    <div className="flex justify-between items-center gap-2">
      <p className="text-white font-thin">
        Total Assets: <span className="text-white font-bold">{totalCount}</span>
      </p>
      <div className="flex justify-end items-center gap-2">
        {/* Left navigation arrow */}
        <Button
          onClickFunction={onPrevious}
          text={"<"}
          disabled={currentPage === 1}
        />

        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <Button text={<>&#xb7;&#xb7;&#xb7;</>} />;
          }

          // Render our Page Pills
          return (
            <Button
              selected={pageNumber === currentPage}
              onClickFunction={() => onPageChange(pageNumber)}
              text={pageNumber}
            />
          );
        })}
        {/*  Right Navigation arrow */}
        <Button
          onClickFunction={onNext}
          text={">"}
          disabled={currentPage === lastPage}
        />
      </div>
    </div>
  );
};

export default Pagination;