import math
from random import seed
from random import random


OUT_OF_BOUNDS = "OUT OF BOUNDS"
INDEX_CORRECTION = "INDEX CORRECTION"


class Product:

    # constructor
    def __init__(self, name, category, short_desc):
        self.name = name
        self.category = category
        self.short_desc = short_desc

    def __str__(self):
        return self.name


class HeapItem:

    # constructor
    def __init__(self, data, priority):
        self.data = data
        self.priority = priority

    #  __lt__, __le__, __gt__, __ge__, __eq__ and __ne__

    # equal to
    def __eq__(self, other):
        return self.priority == other.priority

    # less than
    def __lt__(self, other):
        return self.priority < other.priority

    # greater than
    def __gt__(self, other):
        return self.priority > other.priority

    # greater than or equal to
    def __ge__(self, other):
        return self.priority >= other.priority

    # less than or equal to
    def __le__(self, other):
        return self.priority <= other.priority

    def __str__(self):
        return f"p({self.priority}) {self.data}"


class Heap:

    # constructor
    def __init__(self):
        self.data = []
        self.data.append(INDEX_CORRECTION)

    def __str__(self):
        stream = ""
        for i in range(1, len(self.data)):
            stream += f"[{i}] - {self.get_item(i)}\n"
        return stream

    # indexing functions
    # -- return OUT OF BOUNDS if the index exceeds heap length

    def get_parent_index(self, index):
        return index // 2 if index > 1 else OUT_OF_BOUNDS

    def get_left_child_index(self, index):
        return index * 2 if index * 2 < len(self.data) else OUT_OF_BOUNDS

    def get_right_child_index(self, index):
        return index * 2 + 1 if index * 2 + 1 < len(self.data) else OUT_OF_BOUNDS

    def get_root_index(self):
        return 1

    # helper functions

    def append_item(self, item, priority=0):
        self.data.append(HeapItem(item, priority))

    def swap(self, index1, index2):
        temp = self.data[index1]
        self.data[index1] = self.data[index2]
        self.data[index2] = temp

    def replace_root(self):
        # zamjeni korijen sa zadnjim elementom i ukloni zadnji element
        self.data[self.get_root_index()] = self.data.pop()

    # main functions

    def peek(self):
        return self.data[self.get_root_index()]

    def is_empty(self):
        return len(self.data) == 1

    def get_length(self):
        return len(self.data)

    def get_item(self, index):
        return self.data[index]


class MaxHeap(Heap):

    def __init__(self):
        Heap.__init__(self)

    def push(self, item, priority):
        self.append_item(item, priority)
        self.heapify_up()

    def pop(self):
        popped = self.get_item(self.get_root_index())

        if self.get_length() > 2:
            self.replace_root()
            self.heapify_down()
        elif self.get_length() == 2:
            self.data.pop()
        else:
            raise IndexError("Attempted to pop a empty MaxHeap")

        return popped

    def __str__(self):
        return f"=======================================\n{self.__repr__()}\n{Heap.__str__(self)}======================================="

    def heapify_up(self):
        # preuredi maxi gomilu nakon dodavanja nove stavke

        # stavka koja je zadnja dodata se treba uporediti sa ostatkom gomile da bi se sacuvala konzistentost
        item_index = self.get_length() - 1

        # variabla za koja ce se promjenuti u false ako se preuredjivanje gomile treba zavrsiti
        continue_to_heapify = True

        while (continue_to_heapify):
            parent_index = self.get_parent_index(item_index)

            # -1 je vrijednost koju koristimo da naznacimo da stavka nema roditelja
            if parent_index != OUT_OF_BOUNDS:
                if self.get_item(parent_index) < self.get_item(item_index):
                    # ako je stavka veca od roditelja vrsimo zamjenu
                    self.swap(parent_index, item_index)
                    item_index = parent_index
                else:
                    # ako stavka nije veca od roditelja pronasli smo njeno mjesto u gomili i prekidamo preuredjivanje
                    continue_to_heapify = False
            else:
                # ako stavka nema roditelja prekini preuredjivanje
                continue_to_heapify = False

    def heapify_down(self):
        # preuredi maxi gomilu izbacivanja stavke u korijenu i stavljanja zadnje stavke u prazninu

        # stavka koja se sa zadnjeg mjesta prebacila u rupu na prvom mjestu se uporedjuje sa ostatkom hrpe
        item_index = self.get_root_index()

        # variabla za koja ce se promjenuti u false ako se preuredjivanje gomile treba zavrsiti
        continue_to_heapify = True

        while (continue_to_heapify):

            left_child_index = self.get_left_child_index(item_index)
            right_child_index = self.get_right_child_index(item_index)

            # -1 je vrijednost koju koristimo da naznacimo da stavka dijeteta
            if (right_child_index != OUT_OF_BOUNDS):
                # predpostavimo da lijevo djete stavke ima vecu vrijednost
                index_of_greater_child = left_child_index

                # ako je vrijednost desnog djeteta veca onda poredimo njega sa stavkom
                if self.get_item(left_child_index) < self.get_item(right_child_index):
                    index_of_greater_child = right_child_index

                if self.get_item(item_index) < self.get_item(index_of_greater_child):
                    # ako je stavka manja od djeteta vrsimo zamjenu
                    self.swap(index_of_greater_child, item_index)
                    item_index = index_of_greater_child
                else:
                    # ako stavka nije manja od djeteta sa vecom vrijednosti pronasli smo njeno mjesto u gomili i prekidamo preuredjivanje
                    continue_to_heapify = False
            elif left_child_index != OUT_OF_BOUNDS:
                # posto stavka nema desnog djeteta nemoramo ga porediti sa lijevim
                if self.get_item(item_index) < self.get_item(left_child_index):
                    # ako je stavka manja od djeteta vrsimo zamjenu
                    self.swap(left_child_index, item_index)
                    item_index = left_child_index
                else:
                    # ako stavka nije veca od roditelja pronasli smo njeno mjesto u gomili i prekidamo preuredjivanje
                    continue_to_heapify = False
            else:
                # ako stavka nema roditelja prekini preuredjivanje
                continue_to_heapify = False


def test_heap:
    seed(1)

    heap = MaxHeap()
    for i in range(5):
        heap.push(i * 100, 10)

    for i in range(5):
        heap.push(i * 100 + 1, 5)

    print(heap)

    sorted_order = []

    for i in range(10):
        sorted_order.append(heap.pop().data)

    print(heap)
    print(sorted_order)


def get_products:
    return [
        Product("Reisa 2 Seater Sofa, Pine Green Velvet", "L", "Statement sofa? You got it. Reisa's sure to garner a few guests' attention. And yours. Just check out that curve appeal – and choose from our selection of rich velvets. This 2 seater's designed by Ian Archer – he's known for his luxurious take on mid-century design."),
        Product("Kooper 2 Seater Sofa, Nutmeg Orange Velvet", "L",
                "Think classic style, but updated. Kooper is all smooth curves, with velvet upholstery, round cushions and brass legs making it a standout piece. The dramatically shaped backrest on this accent chair is piped and padded – comfort and style, sorted."),
        Product("Carlton 2 Seater Sofa, Ink Blue Velvet", "L",
                "Carlton's inspired by classic club chair styles – think curved shapes, thick padding, ample seat space and brass capped feet. This 2 seater sofa's just waiting to be lounged on. And that velvet amps up the vintage vibes."),
        Product("Hammond 2 Seater Sofa, Lagoon Blue Velvet", "L", "We all love a Chesterfield. And Hammond's no exception. Our in-house design team created this one – all roll arm details, pulled back buttoning and turned wooden legs. The single seat cushion brings a contemporary feel to this classic blue velvet 2 seater sofa."),
        Product("Imani Large 2 Seater Sofa, Navy Cotton Velvet", "L",
                "Imani's a deftly designed large 2 seater sofa. It's upholstered in navy cotton velvet, and has an unusual cross-rail, solid wood frame beneath."),
        Product("Kooper 2 Seater Sofa, Sapphire Blue Velvet", "L",
                "Think classic style, but updated. Kooper is all smooth curves, with velvet upholstery and brass legs making it a standout piece. The dramatically shaped backrest on this 2 seater sofa is piped and padded – comfort and style, sorted."),
        Product("Margot 2 Seater Sofa, Forest Green Velvet", "L", "Margot makes every day a little extra. Upholstered with soft-touch velvet, this is one for relaxation. Note the buttoned, quilted backrest. The metallic accents on bold wooden legs. Designed by Matt Arquette, this 2 seater sofa makes an impact with old school charm."),
        Product("Stanley 2 Seater Sofa, Twilight Blue Velvet", "L", "Say hello to Stanley. Reclined for ultimate comfort, and good looks that'll have the neighbours talking. Slender yet strong, this 2 seater sofa's brass frame adds an industrial edge to its twilight blue velvet. A little sculptural with a dash of luxe, it's a sophisticated statement."),
        Product("Stanley 2 Seater Sofa, Marine Green Velvet", "L", "Say hello to Stanley. Reclined for ultimate comfort, and good looks that'll have the neighbours talking. Slender yet strong, this 2 seater sofa's brass frame adds an industrial edge to its twilight blue velvet. A little sculptural with a dash of luxe, it's a sophisticated statement."),
        Product("Custom MADE Margot 2 Seater Sofa, Dark Navy Cotton Velvet with Dark Wood Brass Leg", "L",
                "Margot makes every day a little extra. Upholstered with soft-touch velvet, this is one for relaxation. Note the buttoned, quilted backrest. The metallic accents on bold wooden legs. Designed by Matt Arquette, this 2 seater sofa makes an impact with old school charm."),
        Product("Avalon 3 Seater Sofa, Navy Corduroy Velvet", "L",
                "In the mood to get hygge? It's easy with Avalon. This generously proportioned, Scandi-inspired sofa is just waiting to host your movie nights, Sunday mornings and afternoon coffee breaks. Go on, settle in."),
        Product("Haru Large Double Sofa Bed, Pine Green Velvet", "L",
                "Haru is ideal for homes that you want to keep ready for guests without using up all your space. The retro inspired design, piped detailing and soft velvet fabric makes this double sofa bed stylish, grown up – and practical."),
        Product("Scott 4 Seater Right Hand Facing Chaise End Corner Sofa, Petrol Cotton Velvet", "L",
                "Nothing says luxury quite like Scott. A sleek silhouette with pulled detail cushions, upholstered in plush velvet – it oozes sophistication. The clean lines nod to mid-century design, and there’s plenty of room to snuggle up."),
        Product("Vento 5 Seater Corner Sofa, Pale Tan Leather", "L",
                "Generous proportions, comfy cushions and smart tailoring. Vento's a savvy choice for your modern living space. Curved armrests and loose back cushions maximise the comfort, and so does that soft leather upholstery."),
        Product("Orson 2 Seater Sofa, Dark Blue Weave", "L", "Wide, comfy seats just waiting to be sunk into. Deep blue woven upholstery. Lacquered, turned legs. Oh, that's Orson. It's the definition of luxe. Traditional design, updated with simplified lines – total drawing room vibes. This sofa's so inviting."),
        Product("Scott 3 Seater Sofa, Concrete Cotton Velvet", "L",
                "Nothing says luxury quite like Scott. A sleek silhouette with pulled detail cushions, upholstered in plush velvet – it oozes sophistication. The clean lines nod to mid-century design, and there’s plenty of room to snuggle up.")
        Product("Content by Terence Conran Tobias, 3 Seater Sofa, Plush Paprika Velvet, Dark Wood Leg", "L",
                "Looking for designer seating, for less? Say 'hi' to Tobias. Available in a range of sizes and shades, it's as comfy as it is cool – with wide arms and a deep, low seat."),
        Product("Reisa 3 Seater Sofa, Pine Green Velvet", "L", "Statement sofa? You got it. Reisa's sure to garner a few guests' attention. And yours. Just check out that curve appeal – and choose from our selection of rich velvets. This 3 seater's designed by Ian Archer – he's known for his luxurious take on mid-century design."),
        Product("Julianne 3 Seater Sofa, Navy Cotton Velvet", "L",
                "Luxuriously upholstered in navy cotton velvet, Julianne is a sofa that makes a statement. It comes in other on-trend colours, too.")
    ]
