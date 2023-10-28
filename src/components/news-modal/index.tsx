import { INews } from "@/contents/news-section";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from "@mui/material";
import { FC } from "react";
import {useTranslation} from "react-i18next"

interface NewsModalProps {
  open: boolean;
  setOpen: Function;
  news : INews | null,
  setNews : Function
}

const NewsModal: FC<NewsModalProps> = ({ open, setOpen, news, setNews }) => {

    const {t} = useTranslation()


    const handleClose = () => {
        setOpen(false)
        setNews(null)
    } 

  return (
    <div className="">
      <Dialog fullWidth maxWidth={"sm"} open={open} onClick={handleClose} >
        <DialogTitle>
            {
                news?.name
            }
        </DialogTitle>
        <DialogContent>
           <img src={news?.image} alt="" className="w-full rounded-md h-[350px] md:h-[450px] mb-5 object-cover object-top" />
           <Typography>
            {
                news?.description
            }
           </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("close")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewsModal;
