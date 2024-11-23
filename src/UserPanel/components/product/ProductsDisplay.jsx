import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { women_kurtis } from "../../data/women_kurtis";
import ProductCard from "./ProductCard";
import { filters, singleFilter, sortOptions } from "./FilterData";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useSearchParams } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductsDisplay() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filtersState, setFiltersState] = useState({});
  const [sortOption, setSortOption] = useState("default");

  // Update the onChange handler for filters
  const handleFilterUpdate = (value, category) => {
    setFiltersState((prevState) => {
      const currentValues = prevState[category] || [];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value) // Remove value if already selected
        : [...currentValues, value]; // Add value if not selected
      return { ...prevState, [category]: updatedValues };
    });
  };

  const clearFilters = () => {
    setFiltersState({}); // Reset filters state to empty object
  };

  // Update the onChange handler for radio buttons
  const handleRadioFilterChange = (value, category) => {
    setFiltersState((prevState) => ({
      ...prevState,
      [category]: [value], // Radio allows only one value
    }));
  };
  

  // Apply Filters to Products
  const applyFilters = (products) => {
    if (Object.keys(filtersState).length === 0) {
      return products; // No filters, return all products
    }
  
    return products.filter((product) => {
      return Object.entries(filtersState).every(([category, values]) => {
        if (values.length === 0) return true; // Skip empty filters
  
        if (category === "color") {
          return values.includes(product.color.toLowerCase());
        }
  
        if (category === "price") {
          const [min, max] = values[0].split("-").map(Number);
          return product.discountedPrice >= min && product.discountedPrice <= max;
        }
  
        if (category === "discount") {
          return product.discountPercent >= Number(values[0]);
        }
  
        if (category === "stock") {
          return (
            (values.includes("in_stock") && product.quantity > 0) ||
            (values.includes("out_of_stock") && product.quantity === 0)
          );
        }
  
        if (category === "size") {
          return values.some((size) => product.size.some((s) => s.name === size));
        }
  
        // Default check for other categories
        return values.includes(product[category]);
      });
    });
  };
  

  // Sort Products
  const applySorting = (products) => {
    return products.slice().sort((a, b) => {
      if (sortOption === "low") {
        return Number(a.discountedPrice) - Number(b.discountedPrice); // Ensure numeric comparison
      }
      if (sortOption === "price_high") {
        return Number(b.discountedPrice) - Number(a.discountedPrice); // Ensure numeric comparison
      }
      return 0; // Default: No sorting
    });
  };

  const filteredKurtis = applyFilters(women_kurtis); // First filter the products
const sortedKurtis = applySorting(filteredKurtis); // Then sort the filtered products

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="radio"
                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
                {singleFilter.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="radio"
                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <button
                          onClick={() => setSortOption(option.query)}
                          className={classNames(
                            sortOption === option.value
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {option.name}
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8">
              {/* Filters */}

              <div className="hidden lg:block w-64">
                <div className="flex justify-between items-center py-10">
                  <h1 className="text-lg opacity-50 font-bold">Filters</h1>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="ml-4 text-sm text-red-500 hover:text-red-700"
                    >
                      Clear
                    </button>
                  </div>
                </div>
                <form>
                  {filters.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon className="size-5 group-data-[open]:hidden" />
                            <MinusIcon className="size-5 [.group:not([data-open])_&]:hidden" />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, idx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                type="checkbox"
                                id={`filter-${section.id}-${idx}`}
                                name={`${section.id}`}
                                value={option.value}
                                checked={
                                  filtersState[section.id]?.includes(
                                    option.value
                                  ) || false
                                }
                                onChange={() =>
                                  handleFilterUpdate(option.value, section.id)
                                }
                                className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />

                              <label
                                htmlFor={`filter-${section.id}-${idx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}

                  {singleFilter.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon className="size-5 group-data-[open]:hidden" />
                            <MinusIcon className="size-5 [.group:not([data-open])_&]:hidden" />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, idx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                type="radio"
                                id={`filter-${section.id}-${idx}`}
                                name={`${section.id}`}
                                value={option.value}
                                checked={
                                  filtersState[section.id]?.[0] === option.value
                                }
                                onChange={() =>
                                  handleRadioFilterChange(
                                    option.value,
                                    section.id
                                  )
                                }
                                className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${idx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>
              </div>

              {/* Product Grid */}
              <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-3">
                {sortedKurtis.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
