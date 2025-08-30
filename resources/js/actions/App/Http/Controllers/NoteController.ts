import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NoteController::index
 * @see app/Http/Controllers/NoteController.php:12
 * @route '/note'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/note',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NoteController::index
 * @see app/Http/Controllers/NoteController.php:12
 * @route '/note'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoteController::index
 * @see app/Http/Controllers/NoteController.php:12
 * @route '/note'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NoteController::index
 * @see app/Http/Controllers/NoteController.php:12
 * @route '/note'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NoteController::index
 * @see app/Http/Controllers/NoteController.php:12
 * @route '/note'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NoteController::index
 * @see app/Http/Controllers/NoteController.php:12
 * @route '/note'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NoteController::index
 * @see app/Http/Controllers/NoteController.php:12
 * @route '/note'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\NoteController::create
 * @see app/Http/Controllers/NoteController.php:20
 * @route '/note/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/note/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NoteController::create
 * @see app/Http/Controllers/NoteController.php:20
 * @route '/note/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoteController::create
 * @see app/Http/Controllers/NoteController.php:20
 * @route '/note/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NoteController::create
 * @see app/Http/Controllers/NoteController.php:20
 * @route '/note/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NoteController::create
 * @see app/Http/Controllers/NoteController.php:20
 * @route '/note/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NoteController::create
 * @see app/Http/Controllers/NoteController.php:20
 * @route '/note/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NoteController::create
 * @see app/Http/Controllers/NoteController.php:20
 * @route '/note/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\NoteController::store
 * @see app/Http/Controllers/NoteController.php:23
 * @route '/note'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/note',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NoteController::store
 * @see app/Http/Controllers/NoteController.php:23
 * @route '/note'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoteController::store
 * @see app/Http/Controllers/NoteController.php:23
 * @route '/note'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NoteController::store
 * @see app/Http/Controllers/NoteController.php:23
 * @route '/note'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoteController::store
 * @see app/Http/Controllers/NoteController.php:23
 * @route '/note'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\NoteController::edit
 * @see app/Http/Controllers/NoteController.php:41
 * @route '/note/{note}/edit'
 */
export const edit = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/note/{note}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NoteController::edit
 * @see app/Http/Controllers/NoteController.php:41
 * @route '/note/{note}/edit'
 */
edit.url = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { note: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { note: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    note: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        note: typeof args.note === 'object'
                ? args.note.id
                : args.note,
                }

    return edit.definition.url
            .replace('{note}', parsedArgs.note.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoteController::edit
 * @see app/Http/Controllers/NoteController.php:41
 * @route '/note/{note}/edit'
 */
edit.get = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NoteController::edit
 * @see app/Http/Controllers/NoteController.php:41
 * @route '/note/{note}/edit'
 */
edit.head = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NoteController::edit
 * @see app/Http/Controllers/NoteController.php:41
 * @route '/note/{note}/edit'
 */
    const editForm = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NoteController::edit
 * @see app/Http/Controllers/NoteController.php:41
 * @route '/note/{note}/edit'
 */
        editForm.get = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NoteController::edit
 * @see app/Http/Controllers/NoteController.php:41
 * @route '/note/{note}/edit'
 */
        editForm.head = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\NoteController::update
 * @see app/Http/Controllers/NoteController.php:52
 * @route '/note/{note}'
 */
export const update = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/note/{note}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\NoteController::update
 * @see app/Http/Controllers/NoteController.php:52
 * @route '/note/{note}'
 */
update.url = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { note: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { note: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    note: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        note: typeof args.note === 'object'
                ? args.note.id
                : args.note,
                }

    return update.definition.url
            .replace('{note}', parsedArgs.note.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoteController::update
 * @see app/Http/Controllers/NoteController.php:52
 * @route '/note/{note}'
 */
update.put = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\NoteController::update
 * @see app/Http/Controllers/NoteController.php:52
 * @route '/note/{note}'
 */
    const updateForm = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoteController::update
 * @see app/Http/Controllers/NoteController.php:52
 * @route '/note/{note}'
 */
        updateForm.put = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\NoteController::destroy
 * @see app/Http/Controllers/NoteController.php:73
 * @route '/note/{note}'
 */
export const destroy = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/note/{note}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NoteController::destroy
 * @see app/Http/Controllers/NoteController.php:73
 * @route '/note/{note}'
 */
destroy.url = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { note: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { note: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    note: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        note: typeof args.note === 'object'
                ? args.note.id
                : args.note,
                }

    return destroy.definition.url
            .replace('{note}', parsedArgs.note.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoteController::destroy
 * @see app/Http/Controllers/NoteController.php:73
 * @route '/note/{note}'
 */
destroy.delete = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\NoteController::destroy
 * @see app/Http/Controllers/NoteController.php:73
 * @route '/note/{note}'
 */
    const destroyForm = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoteController::destroy
 * @see app/Http/Controllers/NoteController.php:73
 * @route '/note/{note}'
 */
        destroyForm.delete = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const NoteController = { index, create, store, edit, update, destroy }

export default NoteController