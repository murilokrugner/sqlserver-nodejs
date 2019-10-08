/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR2010', {
    TR2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TR2_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TR2_DTTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TR2_HRTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TR2_USUENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TR2_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TR2_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TR2_DTREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TR2_HRREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TR2_USUREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TR2_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TR2_OBSENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TR2_OBSREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
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
    tableName: 'TR2010'
  });
};
