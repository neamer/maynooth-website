def make_reccomendations(sample, products):
    """ 
    evaluate products one by one, determine the priority and then insert into the Maxheap
    name match - 15 points
    category match - 5
    description match - 2
    """

    heap = MaxHeap()

    name_keywords = sample.name.lower().split()
    desc_keywords = sample.short_desc.lower().split()

    for product in products:
        priority = 0

        # check name
        for keyword in name_keywords:
            if keyword in product.name:
                priority += 15

        # check description
        for keyword in desc_keywords:
            if keyword in product.short_desc:
                priority += 2

        # check category
        if sample.category == product.category:
            priority += 5

        heap.push(product, priority)

    reccomendations = []
    for counter in range(5):
        reccomendations.append(heap.pop())

    return reccomendations
