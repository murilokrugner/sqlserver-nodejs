/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAV010', {
    AV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AV_CODPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AV_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AV_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AV_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AV_PUBLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AV_INTPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AV_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'SAV010'
  });
};
