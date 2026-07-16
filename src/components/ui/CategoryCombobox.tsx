"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/lib/mock/functions";

interface CategoryComboboxProps {
  categorySelect: string;
  setCategorySelect: (category: string) => void;
}

export function CategoryCombobox({
  categorySelect,
  setCategorySelect,
}: CategoryComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const categories = getCategories();

  return (
    <div className="w-full max-w-md sm:max-w-xs select-none">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full h-11 sm:h-10 text-sm font-medium border border-criollo-border bg-white rounded-xl focus:ring-1 focus:ring-[#1a1a1a] focus:border-[#1a1a1a] transition-all duration-200 justify-between hover:bg-white"
          >
            {categorySelect && categorySelect !== "all" ? (
              <span className="truncate">{categorySelect}</span>
            ) : (
              <span className="text-muted-foreground">
                Seleccionar categoría
              </span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-[calc(100vw-32px)] sm:w-[var(--radix-popover-trigger-width)] p-0 z-[700] rounded-xl border border-criollo-border shadow-md bg-white"
          align="start"
        >
          <Command className="rounded-xl overflow-hidden">
            <CommandInput
              placeholder="Buscar categoría..."
              className="h-11 sm:h-10 text-sm"
            />
            <CommandList className="max-h-[280px] sm:max-w-none overflow-y-auto">
              <CommandEmpty className="text-xs sm:text-sm text-neutral-500 py-4 text-center">
                No se encontró la categoría.
              </CommandEmpty>
              <CommandGroup className="p-1">
                {/* Opción "Todas" */}
                <CommandItem
                  value="all"
                  onSelect={() => {
                    setCategorySelect("all");
                    setOpen(false);
                  }}
                  className="text-sm font-semibold text-[#1a1a1a] py-2.5 sm:py-2 px-3 rounded-lg cursor-pointer flex items-center"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 shrink-0",
                      categorySelect === "all" ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <span>Todas</span>
                </CommandItem>

                {categories.map((category) => (
                  <CommandItem
                    key={category.id}
                    value={category.id}
                    onSelect={() => {
                      setCategorySelect(category.name);
                      setOpen(false);
                    }}
                    className="text-sm font-semibold text-[#1a1a1a] py-2.5 sm:py-2 px-3 rounded-lg cursor-pointer flex items-center"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 shrink-0",
                        categorySelect === category.name
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    <span className="truncate">{category.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
