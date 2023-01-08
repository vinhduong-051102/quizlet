import { ButtonStyled, Text } from "./styles";
import { useTranslation } from "react-i18next";

const AddNewCard = () => {
  const { t } = useTranslation();
  return ( 
    <ButtonStyled>
      <Text>{t("createLesson.addNew")}</Text>
    </ButtonStyled>  
  );
}

export default AddNewCard;