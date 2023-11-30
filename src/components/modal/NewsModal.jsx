import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Stack, Typography } from "@mui/material";
import closeI from "../../assets/icons/modal/close.svg";
import Carousel from "../ui/Carousel";
import { newsConfig } from "../../utils/config";
import NewsCard from "../ui/cards/NewsCard";
import NewDetails from "./NewDetails";
import { newsContext } from "../../store/context/NewsProvider";
import NewsCardSkeleton from "../ui/cards/NewsCardSkeleton";

export default function Modal({ open, setOpen }) {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const { data } = React.useContext(newsContext);

  const handleClose = () => {
    setOpen(false);
  };
  const newsList =
    data.status === "loading" ? (
      <>
        <NewsCardSkeleton />
        <NewsCardSkeleton />
        <NewsCardSkeleton />
        <NewsCardSkeleton />
      </>
    ) : (
      data.news.map((item, index) => {
        return (
          <NewsCard
            key={index}
            index={index}
            item={item}
            setSelectedCard={setSelectedCard}
          />
        );
      })
    );

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"sm"}
        fullWidth={true}
        scroll="paper"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          background: "rgba(255, 255, 255, 0.02)",
        }}
        PaperProps={{
          sx: {
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.17)",
            backdropFilter: "blur(50px)",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          id="alert-dialog-title"
        >
          {selectedCard >= 0 && (
            <Typography sx={{ color: "white" }}>اخر الاخبار</Typography>
          )}
          <IconButton onClick={handleClose} aria-label="delete" size="small">
            <img
              src={closeI}
              width={12}
              height={12}
              style={{ objectFit: "contain" }}
            />
          </IconButton>
        </DialogTitle>
        <DialogContent id="news_dialog">
          {selectedCard !== null ? (
            <NewDetails
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          ) : (
            <>
              <Carousel />

              <Stack spacing={2}>
                <Typography sx={{ color: "white" }}>اخر الاخبار</Typography>
                {newsList}
              </Stack>
            </>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
