import { IBreadcrumpItem } from '@/components/breadcrump'
import AboutSection from '@/contents/about-section'
import ClientsSection from '@/contents/clients'
import NovacolorSection from '@/contents/novacolor-section'
import PageHeader from '@/contents/page-header'
import Stats from '@/contents/stats'
import React, { useTransition } from 'react'
import {useTranslation} from "react-i18next"



const AboutInner = () => {
    const {t} = useTranslation()
    const breadcrumpData: IBreadcrumpItem[] = [
        {
            id: 1,
            name: t("about"),
            url: "/about"
        }
    ]
    return (
   <>
   <PageHeader title={t("about")}  breadcrump={breadcrumpData} />
   <AboutSection extraDescription={t("about-extra-description")} />
   <NovacolorSection />
   <Stats />
   <ClientsSection />
   </>
  )
}

export default AboutInner