import React, { useContext } from 'react'
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';

export default function Home() {
    const [query, setQuery] = useState('');
    // const [isDark] = useOutletContext();
    // const [isDark] = useContext(ThemeContext);
    const [isDark] = useTheme();
    const windowSize = useWindowSize();
    return (
        <main className={isDark ? 'dark' : ''}>
            {/* <h1> {windowSize.height} * {windowSize.width}</h1> */}
            <div className="search-filter-container">
                <SearchBar setQuery={setQuery} />
                <SelectMenu setQuery={setQuery} />
            </div>
            <CountriesList query={query} />
        </main>
    )
}
