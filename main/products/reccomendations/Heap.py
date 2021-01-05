
class HeapItem:

    # constructor
    def __init__(self, data, priority):
        self.data = data
        self.priority = priority

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

    # constants
    OUT_OF_BOUNDS = "OUT OF BOUNDS"
    INDEX_CORRECTION = "INDEX CORRECTION"

    # constructor
    def __init__(self):
        self.data = []
        self.data.append(Heap.INDEX_CORRECTION)

    def __str__(self):
        stream = ""
        for i in range(1, len(self.data)):
            stream += f"[{i}] - {self.get_item(i)}\n"
        return stream

    # indexing functions
    # -- return OUT OF BOUNDS if the index exceeds heap length

    def get_parent_index(self, index):
        return index // 2 if index > 1 else self.OUT_OF_BOUNDS

    def get_left_child_index(self, index):
        return index * 2 if index * 2 < len(self.data) else self.OUT_OF_BOUNDS

    def get_right_child_index(self, index):
        return index * 2 + 1 if index * 2 + 1 < len(self.data) else self.OUT_OF_BOUNDS

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
        popped = self.get_item(self.get_root_index()).data

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
            if parent_index != self.OUT_OF_BOUNDS:
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
            if (right_child_index != self.OUT_OF_BOUNDS):
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
            elif left_child_index != self.OUT_OF_BOUNDS:
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
