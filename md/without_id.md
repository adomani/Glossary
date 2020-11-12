\\( \def\A{{\mathbb{A}}} \def\C{{\mathbb{C}}} \def\F{{\mathbb{F}}} \def\Z{{\mathbb{Z}}} \def\Q{{\mathbb{Q}}} \def\R{{\mathbb{R}}} \def\N{{\mathbb{N}}} \def\fm{{\mathfrak{m}}}  \def\fp{{\mathfrak{p}}}  \def\fq{{\mathfrak{q}}}\def\primes{{\mathbf{P}}} \def\spec{\operatorname{Spec}} \def\oh{\frac{1}{2}} \def\zoh{\Z[\oh]} \def\zmod#1{\Z/#1\Z} \\)


# Commutative rings without an identity

In this section, we assume that rings are commutative, but do not necessarily contain an identity.  We are going to apply the functor \\(\spec\\) to such commutative rings.  Note that the definition of the functor \\(\spec\\) does not require the input commutative ring to have an identity element.  What **uses** the existence of an identity is the proof of the statement that the category of affine schemes is equivalent to the opposite category to commutative rings with 1.

**Warning.**
Writing \\(\spec R\\) for a commutative ring \\(R\\) that does not have an identity might mislead you to think that \\(\spec R\\) is *affine*.  The second example below shows that actually, \\(\spec R\\) need not even be homeomorphic to the spectrum of any commutative ring with identity.

So, **what goes wrong if we remove the condition that our commutative rings have an identity?**

First of all, we are not guaranteed the existence of prime ideals.

Recall that a prime ideal in a ring \\(R\\) is an ideal \\(P \subset R\\) such that the quotient \\(R/P\\) is a *domain*.  By definition, a domain is a **non-zero** ring in which \\(0\\) is the only zero-divisor.  Equivalently, a prime ideal is a proper ideal \\(P \subset R\\) such that the quotient \\(R/P\\) is a domain.

**Example.**
Let \\((A,+)\\) be any abelian group.  Define a multiplication on \\(A\\) by setting \\(a \cdot b = 0\\), for all \\(a,b \in A\\).  This makes \\((A,+,\,\cdot)\\) into a commutative ring **without** 1.  The ring \\((A,+,\,\cdot)\\) has no prime ideals: since the square of any element is zero, any prime ideal must contain every element, contrary to the definition of prime ideal.  This means that \\(\spec A = \emptyset\_{\textrm{sch}} = \spec 0\\): hence, \\((A,+,\,\cdot)\\)is another ring with empty scheme.

Here is an example of a commutative ring whose spectrum is not homeomorphic to the spectrum of any commutative ring with 1.

**Example.**
Let \\(k\\) be a field and let \\(I\\) be a set.  Let \\(k\_I = \bigoplus \_{i \in I} k\\) be the direct sum of \\(I\\)-many copies of the field \\(k\\).  Thus, \\(k\_I\\) is a commutative ring and it has an identity if and only if \\(I\\) is finite.  The set of prime ideals in \\(k\_I\\) is in bijection with the indexing set \\(I\\): any prime ideal must contain all copies of \\(k\\), except for exactly one.  It follows that every prime ideal is maximal, as the quotient is isomorphic to the field \\(k\\).  In fact, \\(\spec k\_I\\) is homeomorphic to \\(I\\) with the discrete topology (every subset is open).  In particular, if \\(I\\) is infinite, then \\(\spec k\_I\\) is not (quasi-)compact and hence \\(\spec k\_I\\) is **not** homeomorphic to an affine scheme!


Just for fun, let us modify the previous example slightly.  Let \\(\primes \subset \N\\) denote the set of prime numbers.  Let \\(\Z\_\primes\\) be the ring
\\[ \Z\_\primes = \bigoplus \_{p \in \primes} \F\_{p}. \\]
There is a clear bijection between \\(\spec \Z\_\primes\\) and \\( \left( \spec \Z \right) \setminus \\{(0)\\}\\).  However, the two topological spaces are not homeomorphic: the topology on \\(\spec \Z\_\primes\\) is discrete, while the topology on \\(\left( \spec \Z \right) \setminus \\{(0)\\}\\) is cofinite.

## Adding back an identity

Given any (commutative) ring \\(R\\), we define a new (commutative) ring \\(R\_1\\) with identity as follows.  Let \\(R\_1 = \Z \oplus R\\), with addition defined componentwise and multiplication defined so that \\(1 \in \Z\\) is the identity of \\(R\_1\\): for all \\(a,a' \in \Z\\) and all \\(r,r' \in R\\),
\\[ \begin{array}{rcl} (a,r)+(a',r') & = & (a+a',r+r'), \cr (a,r) \cdot (a',r') & = & (aa',ar'+a'r+rr'). \end{array} \\]


f

f

f

f

f

f

f

f

f