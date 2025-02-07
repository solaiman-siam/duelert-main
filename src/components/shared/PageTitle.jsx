import { Helmet } from "react-helmet-async"


function PageTitle({children, name}) {
  return (
    <>
        <Helmet>
            <title>{`Duelert - ${name}  `}</title>
            </Helmet>
        {children}
    </>
  )
}

export default PageTitle