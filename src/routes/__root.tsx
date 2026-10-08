import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent(){return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="text-center"><h1 className="text-7xl font-bold">404</h1><p className="mt-3">Página não encontrada.</p><Link to="/" className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-white">Voltar</Link></div></div>;}
function ErrorComponent({error,reset}:ErrorComponentProps){const router=useRouter();useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"});},[error]);return <div className="flex min-h-screen items-center justify-center px-4"><div className="text-center"><h1 className="text-xl font-bold">Não foi possível carregar a página</h1><p className="mt-2">Tente atualizar ou voltar para o início.</p><button onClick={()=>{router.invalidate();reset();}} className="mt-5 rounded-md bg-primary px-4 py-2 text-white">Tentar novamente</button></div></div>;}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
 head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"BlueHub — Loja Gamer"},{name:"description",content:"Loja gamer com produtos para seus jogos favoritos."},{property:"og:title",content:"BlueHub — Loja Gamer"},{property:"og:description",content:"Produtos, entrega rápida e suporte eficiente."},{property:"og:type",content:"website"}],links:[{rel:"stylesheet",href:appCss},{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}]}),
 shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent
});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-BR"><head><HeadContent/></head><body>{children}<Scripts/></body></html>;}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>;}
