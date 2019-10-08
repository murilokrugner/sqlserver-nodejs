/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TZZ010', {
    TZZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TZZ_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TZZ_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TZZ_TIPLUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TZZ_METAPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TZZ_TOXICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TZZ_VISCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TZZ_INDVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TZZ_DENSID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TZZ_FULGOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TZZ_COMBUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TZZ_FLUIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TZZ_RESIDU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TZZ_CONSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TZZ_ESTRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TZZ_FILAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TZZ_ADEREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TZZ_GOTEJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TZZ_OBSERV: {
      type: "IMAGE",
      allowNull: true
    },
    TZZ_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'TZZ010'
  });
};
