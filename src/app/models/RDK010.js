/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDK010', {
    RDK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDK_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDK_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RDK_HIERAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDK_TIPO: {
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
    },
    RDK_DTINCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDK_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDK_DTSUSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDK_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDK_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RDK_RASCUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDK_PADRAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'RDK010'
  });
};
