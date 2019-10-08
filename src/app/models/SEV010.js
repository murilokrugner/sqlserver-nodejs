/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEV010', {
    EV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EV_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EV_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EV_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EV_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EV_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EV_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EV_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EV_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EV_RECPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EV_PERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EV_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EV_RATEICC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EV_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EV_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EV_SITUACA: {
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
    EV_IDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    }
  }, {
    tableName: 'SEV010'
  });
};
