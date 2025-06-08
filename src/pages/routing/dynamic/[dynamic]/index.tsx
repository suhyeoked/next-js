import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

interface Params extends ParsedUrlQuery {
    dynamic : string;  /* 아까 [dynamic] 이거임 dynamic <- 이게 파라미터인건 다들 알잖아요.. */
}

interface Props {
    route : string | undefined
}

export const getServerSideProps : GetServerSideProps <Props , Params> = async (
    context
    ) => {
    console.log(context.params?.dynamic)

    return {
        props : {
            route: context.params?.dynamic
        },
    }
}

const DynamicRouting : FC<Props> /*제레닉으로 넣어서 props interface로 넣어줌 */ = (props) =>{
    return(
        <main>
            DynamicRouting
            <p>
                {props.route}
            </p>
        </main>
    )
}

export default DynamicRouting;