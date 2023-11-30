import React, { useContext, useState } from "react";
import { Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import listI from "../../assets/icons/header/list.png";
import Modal from "../modal/NewsModal";
import { newsContext } from "../../store/context/NewsProvider";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    padding: "0 4px",
  },
}));

export default function NewsListToggler() {
  const [open, setOpen] = useState(false);
  const { data } = useContext(newsContext);
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
        sx={{
          backgroundColor: "#FFFFFF20",
          backdropFilter: "blur(8px)",
          width: "40px",
          height: "40px",
        }}
      >
        <StyledBadge badgeContent={data?.news?.length} color="error">
          <img
            width={24}
            height={24}
            style={{ objectFit: "contain" }}
            src={listI}
          />
        </StyledBadge>
      </IconButton>

      <Modal setOpen={setOpen} open={open} />
    </>
  );
}
