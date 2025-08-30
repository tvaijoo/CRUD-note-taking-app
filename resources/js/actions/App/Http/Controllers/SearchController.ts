import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SearchController::searchPage
 * @see app/Http/Controllers/SearchController.php:12
 * @route '/note/search'
 */
export const searchPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchPage.url(options),
    method: 'get',
})

searchPage.definition = {
    methods: ["get","head"],
    url: '/note/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::searchPage
 * @see app/Http/Controllers/SearchController.php:12
 * @route '/note/search'
 */
searchPage.url = (options?: RouteQueryOptions) => {
    return searchPage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::searchPage
 * @see app/Http/Controllers/SearchController.php:12
 * @route '/note/search'
 */
searchPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchPage.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::searchPage
 * @see app/Http/Controllers/SearchController.php:12
 * @route '/note/search'
 */
searchPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: searchPage.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SearchController::searchPage
 * @see app/Http/Controllers/SearchController.php:12
 * @route '/note/search'
 */
    const searchPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: searchPage.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SearchController::searchPage
 * @see app/Http/Controllers/SearchController.php:12
 * @route '/note/search'
 */
        searchPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: searchPage.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SearchController::searchPage
 * @see app/Http/Controllers/SearchController.php:12
 * @route '/note/search'
 */
        searchPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: searchPage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    searchPage.form = searchPageForm
const SearchController = { searchPage }

export default SearchController