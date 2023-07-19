/* eslint-disable @typescript-eslint/no-misused-promises */
import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

/*
Por que um componente renderiza?
1. Hooks changed
2. Props changed
3. Parent rerendered

Qual fluxo da renderização?
1. React recria o HTML da interface daquele componente
2. Compara a versão do HTML recriada com a versão anterior
3. SE mudou algo, ele reescreve o HTML na tela

MEMO:
0. Hooks changed, props changed (deep comparison)
0.1 Comparar a versão anterior dos hooks e props
0.2 SE mudou algo, ele vai permitir a nova renderização (caindo no fluxo anterior)
*/

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  // isSubmitting é true ou false dizendo se o formulário está sendo enviado ou não
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
