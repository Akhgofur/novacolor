import { IBreadcrumpItem } from "@/components/breadcrump"
import ContactForm from "@/contents/contact-form"
import ContactInfo from "@/contents/contact-info"
import PageHeader from "@/contents/page-header"
import {useTranslation} from "react-i18next"

const breadcrumpData: IBreadcrumpItem[] = [
    {
        id: 1,
        name: "contact",
        url: "/contact"
    }
]

const ContactInner = () => {

    const {t} = useTranslation()

   

    return (
        <>
            <PageHeader breadcrump={breadcrumpData} title={t("contact")} />
            <ContactInfo />
            <ContactForm />
        </>
    )
}

export default ContactInner