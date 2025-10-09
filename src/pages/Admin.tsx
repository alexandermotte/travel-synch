import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Users, ShoppingCart, TrendingUp, Settings } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';

export default function Admin() {
  const navigate = useNavigate();
  const { user, isAdmin, loading, signOut } = useAuth();
  const [initializing, setInitializing] = useState(true);
  const [customers, setCustomers] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/auth');
      } else if (!isAdmin) {
        navigate('/');
      } else {
        setInitializing(false);
      }
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin && !initializing) {
      fetchData();
    }
  }, [isAdmin, initializing]);

  const fetchData = async () => {
    try {
      setLoadingData(true);
      
      // Récupérer tous les clients
      const { data: customersData, error: customersError } = await supabase
        .from('customers')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (customersError) throw customersError;
      
      // Récupérer toutes les commandes avec les infos client
      const { data: ordersData, error: ordersError } = await supabase
        .from('orders')
        .select('*, customers(*)')
        .order('created_at', { ascending: false });
      
      if (ordersError) throw ordersError;
      
      setCustomers(customersData || []);
      setOrders(ordersData || []);
    } catch (error: any) {
      console.error('Error fetching data:', error);
      toast.error('Erreur lors du chargement des données');
    } finally {
      setLoadingData(false);
    }
  };

  const totalRevenue = orders
    .filter(o => o.status === 'paid' || o.status === 'completed')
    .reduce((sum, order) => sum + Number(order.amount || 0), 0);

  if (loading || initializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">TravelEase Admin</h1>
            <p className="text-sm text-muted-foreground">Tableau de bord administrateur</p>
          </div>
          <Button 
            variant="outline" 
            onClick={signOut}
          >
            Déconnexion
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loadingData ? '...' : customers.length}</div>
              <p className="text-xs text-muted-foreground">
                {customers.length === 0 ? 'Base de données prête' : 'Clients enregistrés'}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commandes</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loadingData ? '...' : orders.length}</div>
              <p className="text-xs text-muted-foreground">
                {orders.length === 0 ? 'Aucune commande' : 'Commandes totales'}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenus</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loadingData ? '...' : `${totalRevenue.toFixed(2)} €`}
              </div>
              <p className="text-xs text-muted-foreground">
                {totalRevenue === 0 ? 'Prêt à démarrer' : 'Revenus confirmés'}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Système</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">✓</div>
              <p className="text-xs text-muted-foreground">Opérationnel</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Fonctionnalités à venir</CardTitle>
              <CardDescription>Prochaines étapes de développement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm">Base de données configurée</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm">Système d'authentification actif</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span className="text-sm">Intégration Rocket Gate (à venir)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span className="text-sm">Dashboard statistiques (à venir)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span className="text-sm">Recherche clients (à venir)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Accès rapide</CardTitle>
              <CardDescription>Navigation vers les fonctionnalités principales</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" disabled>
                <Users className="mr-2 h-4 w-4" />
                Gestion des clients
              </Button>
              <Button className="w-full justify-start" variant="outline" disabled>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Commandes
              </Button>
              <Button className="w-full justify-start" variant="outline" disabled>
                <TrendingUp className="mr-2 h-4 w-4" />
                Statistiques de vente
              </Button>
              <Button 
                className="w-full justify-start bg-accent hover:bg-accent/90" 
                onClick={() => navigate('/')}
              >
                Retour au site
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Liste des commandes récentes */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>Commandes récentes</CardTitle>
            <CardDescription>
              {orders.length === 0 ? 'Aucune commande pour le moment' : `${orders.length} commande(s) enregistrée(s)`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loadingData ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : orders.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Aucune commande pour le moment
              </p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>N° Commande</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Montant</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.order_number}</TableCell>
                        <TableCell>
                          {order.customers?.company_name || 'Client public'}
                        </TableCell>
                        <TableCell>{order.service_type}</TableCell>
                        <TableCell>
                          {Number(order.amount).toFixed(2)} {order.currency}
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            order.status === 'paid' || order.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          {new Date(order.created_at).toLocaleDateString('fr-FR')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
