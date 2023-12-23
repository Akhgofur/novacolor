import Container from '@/components/container'
import Heading from '@/components/heading'
import React from 'react'
import { useTranslation } from 'react-i18next'

const NovacolorSection = () => {
    const {t} = useTranslation()
  return (
    <section className="py-[40px] md:py-[80px] bg-[#ececec]">
    <Container>
      <div className="flex items-center flex-col-reverse md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <p className="text-subheadColor text-lg font-medium border-b-2 border-b-mainBrown w-fit mb-4">
            Novacolor
          </p>
          <Heading className="mb-5">{t("hero-heading")}</Heading>
        </div>
        <img
        loading='lazy'
          src="/img/products/calce-3.jpg"
          alt=""
          className="w-full md:w-1/2 h-[500px] object-contain"
        />
      </div>
    </Container>
  </section>
  )
}

export default NovacolorSection