/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SKA010', {
    KA_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    KA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    KA_ENCTELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    KA_PEBTNOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    KA_PEGDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_PEHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    KA_NMMAST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    KA_NMDET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    KA_CPCHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_CPIDXCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_CPCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_CPNMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_CPGDINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_CMPKEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_OPCODI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_REGCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    KA_ALIMAST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_ALIDET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    KA_ABRTELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    KA_CONTSEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    KA_ANTGRAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    KA_APOGRAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SKA010'
  });
};
