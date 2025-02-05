"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Package, Home, ShoppingBag, AlignJustify, ShoppingCart, Users, Wrench, LogOut } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

export const Sidebar = () => {
    return (
        <div className="flex w-full flex-col bg-muted/40">

            <aside className=" fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link href="#"
                            className=" flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
                            <Package className="w-6 h-6" />
                            <span className="sr-only">Dashboard Avatar</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center  text-muted-foreground transition-colors rounded-lg hover:text-foreground">
                                    <Home className="w-6 h-6" />
                                    <span className="sr-only">Inicio</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Inicio</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center  text-muted-foreground transition-colors rounded-lg hover:text-foreground">
                                    <ShoppingCart className="w-6 h-6" />
                                    <span className="sr-only">Pedidos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Pedidos</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center  text-muted-foreground transition-colors rounded-lg hover:text-foreground">
                                    <ShoppingBag className="w-6 h-6" />
                                    <span className="sr-only">Produtos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Produtos</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center  text-muted-foreground transition-colors rounded-lg hover:text-foreground">
                                    <Users className="w-6 h-6" />
                                    <span className="sr-only">Clientes</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Clientes</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center  text-muted-foreground transition-colors rounded-lg hover:text-foreground">
                                    <Wrench className="w-6 h-6" />
                                    <span className="sr-only">Configurações</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Configurações</TooltipContent>
                        </Tooltip>
                  
                    </TooltipProvider>
                </nav>

                <nav className="mt-auto flex flex-col items-center gap-4 px-2 pb-6">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center  text-muted-foreground transition-colors rounded-lg hover:text-foreground">
                                    <LogOut className="w-6 h-6" />
                                    <span className="sr-only">Sair</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Sair</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>

            </aside>



            <div className="sm:hidden flex flex-col sm:gap-4 sa:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 broder-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <AlignJustify className="w-5 h-5" />
                                <span className="sr-only">Abrir / Fechar Menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="sm:max-w-xs ">
                            <nav className="grid text-lg font-medium gap-6">
                                <Link
                                    className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                                    prefetch={false}
                                    href="#">
                                    <Package className="h-6 w-6 transition-all" />
                                    <span className="sr-only">Logo</span>
                                </Link>

                                <Link
                                    className="flex item-center gap-2 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                    href="#">
                                    <Home className="h-6 w-6 transition-all" />
                                    Inicio
                                </Link>

                                <Link
                                    className="flex item-center gap-2 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                    href="#">
                                    <ShoppingCart className="h-6 w-6 transition-all" />
                                    Pedidos
                                </Link>

                                <Link
                                    className="flex item-center gap-2 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                    href="#">
                                    <ShoppingBag className="h-6 w-6 transition-all" />
                                    Produtos
                                </Link>

                                <Link
                                    className="flex item-center gap-2 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                    href="#">
                                    <Users className="h-6 w-6 transition-all" />
                                    Clientes
                                </Link>

                                <Link
                                    className="flex item-center gap-2 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                    href="#">
                                    <Wrench className="h-6 w-6 transition-all" />
                                    Configurações
                                </Link>

                                <Link
                                    className="flex item-center gap-2 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                    href="#">
                                    <LogOut className="h-6 w-6 transition-all" />
                                    Sair
                                </Link>
                            </nav>

                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    )
}