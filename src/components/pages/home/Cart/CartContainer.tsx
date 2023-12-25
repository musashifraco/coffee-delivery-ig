import * as S from "./CartContainer.style.ts"

export function CartContainer() {
    return (
    <S.Container>
        <S.FormContainer>
            <S.TitleForm>Complete seu pedido</S.TitleForm>
            <S.Form></S.Form>
        </S.FormContainer>
        <S.SelectedCoffeeContainer></S.SelectedCoffeeContainer>
        <S.PaymentContainer></S.PaymentContainer>
    </S.Container>
    )
}