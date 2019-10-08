/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDA010', {
    RDA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDA_CODAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDA_CODADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDA_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDA_DTIAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDA_DTFAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDA_CODDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDA_TIPOAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDA_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDA_CODNET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDA_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'RDA010'
  });
};
